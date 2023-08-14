import Input from "../components/Input";

const Register = (props) => {
  return (
    <div className="registerPage">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input style={{ margin: "20px" }} name="Name" type="text" />
        <button onClick={props.onSClick} type="button">
          Sign up
        </button>
      </form>
      <div className="image"></div>
    </div>
  );
};

export default Register;
