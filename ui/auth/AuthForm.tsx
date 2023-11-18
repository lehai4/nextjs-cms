"use client";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
type FieldType = {
  username?: string;
  password?: string;
  email?: string;
};
const SignIn = () => {
  const pathname = usePathname();
  const handleFinished = (e: React.ChangeEvent<HTMLElement>) => {};
  return (
    <Form
      name="login"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={handleFinished}
      className="mt-24"
    >
      {pathname === "/auth/login" ? (
        <>
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[
              { required: true },
              { whitespace: true },
              { message: "Please input your username!" },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[
              { required: true },
              {
                message: "Please input your password",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>
          <Form.Item className="flex justify-end ">
            <Link href={`/auth/register`} style={{ fontStyle: "italic" }}>
              Do you have account?
            </Link>
          </Form.Item>
          <Form.Item className="flex justify-end">
            <Button type="primary" htmlType="submit" className="bg-blue-500">
              Login
            </Button>
          </Form.Item>
        </>
      ) : (
        <>
          <Form.Item<FieldType>
            label="username"
            name="username"
            rules={[
              { required: true },
              { whitespace: true },
              { message: "Please input your username!" },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[
              { required: true },
              {
                message: "Please input your password",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
              { required: true },
              {
                message: "Please input your email",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item className="flex  justify-end">
            <div className="flex justify-between gap-4 items-center">
              <Button type="primary" className="bg-blue-500">
                <Link href="/auth/login">Back</Link>
              </Button>
              <Button type="primary" htmlType="submit" className="bg-blue-500">
                Register
              </Button>
            </div>
          </Form.Item>
        </>
      )}
    </Form>
  );
};

export default SignIn;
