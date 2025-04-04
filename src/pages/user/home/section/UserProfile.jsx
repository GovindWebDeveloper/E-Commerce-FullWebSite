import {
  Card,
  ConfigProvider,
  Drawer,
  Form,
  Input,
  message,
  Radio,
} from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserDetails } from "../../../../redux/user/userProfileSlice";
import CustomButton from "../../../../component/CustomButton";

const UserProfile = () => {
  const userData = useSelector((state) => state.profile.userData);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onFinish = (values) => {
    setLoading(true);
    dispatch(
      updateUserDetails({
        username: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        gender: values.gender,
      })
    );
    message.success("User Details Updated Successfully");
    setLoading(false);
    setOpen(false);
  };

  const options = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];
  return (
    <div style={{ width: "50%", margin: "auto", padding: "1em" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginBottom: "5px",
        }}
      >
        <CustomButton text={"Edit"} onClick={() => showDrawer()} />

        <Drawer title="Edit Personal Details" onClose={onClose} open={open}>
          <Form
            name="EditUserDetails"
            onFinish={onFinish}
            initialValues={{
              firstName: userData.firstName,
              lastName: userData.lastName,
              email: userData.username,
              gender: userData.gender,
            }}
          >
            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "Please input First Name" },
                {
                  pattern: /^[A-Za-z\s'-]{2,50}$/,
                  message: "Please inout valid Input",
                },
              ]}
            >
              <Input
                placeholder="First Name"
                style={{ width: "100%", height: "3em", marginTop: "1em" }}
              />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "Please input Last Name" },
                {
                  pattern: /^[A-Za-z\s'-]{2,50}$/,
                  message: "Please input valid Input",
                },
              ]}
            >
              <Input
                placeholder="Last Name"
                style={{ width: "100%", height: "3em", marginTop: "1em" }}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email" },
                {
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please input valid email address",
                },
              ]}
            >
              <Input
                placeholder="Email example@domain.com"
                style={{ width: "100%", height: "3em", marginTop: "1em" }}
              />
            </Form.Item>
            <Form.Item
              name="gender"
              rules={[{ required: true, message: "Please Select your Gender" }]}
            >
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#ffab45",
                  },
                }}
              >
                <Radio.Group
                  block
                  options={options}
                  optionType="button"
                  buttonStyle="solid"
                  style={{
                    width: "100%",
                    height: "3em",
                    marginTop: "1em",
                  }}
                />
              </ConfigProvider>
            </Form.Item>
            <Form.Item>
              <CustomButton
                text={"Submit"}
                htmlType="submit"
                loading={loading}
              />
            </Form.Item>
          </Form>
        </Drawer>
      </div>
      <Card style={{ padding: "1em", boxShadow: "1px 1px 10px black" }}>
        <h2 style={{ textAlign: "center", paddingBottom: "2em" }}>
          User Details
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <h3>
            First Name:{" "}
            <span style={{ fontWeight: "500" }}>{userData.firstName}</span>
          </h3>
          <h3>
            Last Name:{" "}
            <span style={{ fontWeight: "500" }}>{userData.lastName}</span>
          </h3>
          <h3>
            Email:{" "}
            <span style={{ fontWeight: "500" }}>{userData.username}</span>
          </h3>
          <h3>
            Gender: <span style={{ fontWeight: "500" }}>{userData.gender}</span>
          </h3>
        </div>
      </Card>
    </div>
  );
};

export default UserProfile;
