import NavigationLayout from "./NavigationBar";
import Register from "./register";

export default function Layout({ children }) {
    return (
      <>
        <div />
            <NavigationLayout/>
            <Register></Register>
            <main>{children}</main>
        <div />
      </>
    )
  }

  