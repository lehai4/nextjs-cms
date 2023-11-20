"use client";
import { FieldType } from "@/types";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";

const AuthForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { pending } = useFormStatus();

  const handleLogin = async (values: any) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const data = await res.json();
      data.status === 404
        ? toast.error("Login failed!")
        : toast.success("Login successfully!");
      router.push("/dashboard");
    } catch (error: any) {
      console.log(
        "There was a problem with the fetch operation" + error.message
      );
    }
  };

  const handleRegister = async (values: FieldType) => {
    try {
      await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify(values),
      });
      toast.success("Register successfully!");
    } catch (error: any) {
      console.log(
        "There was a problem with the fetch operation " + error.message
      );
    }
  };
  const handleFinished = (values: FieldType) => {
    pathname === "/auth/login" ? handleLogin(values) : handleRegister(values);
  };
  return (
    <Form
      name="login"
      layout="vertical"
      initialValues={{ remember: true }}
      className="mt-24"
      onFinish={handleFinished}
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
            <Button
              type="primary"
              htmlType="submit"
              className="bg-blue-500"
              aria-disabled={pending}
            >
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

export default AuthForm;
