import classes from "../../Styles/Login.module.css";
import loginImage from "../../assets/images/login.svg";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={loginImage} />
        <Form className={`${classes.login} form`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>Submit Now</Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
