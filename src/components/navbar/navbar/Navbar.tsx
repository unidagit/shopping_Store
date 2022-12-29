import Button from "../../button/Button";

function Navbar() {
  return (
    <div>
      <Button size="l" color="blue">
        l
      </Button>
      <Button size="m" color="blue">
        m
      </Button>
      <Button size="m" color="gray">
        m
      </Button>
      <Button size="ms" color="blue">
        ms
      </Button>
      <Button size="ms" color="whiteBtn">
        ms
      </Button>
      <Button size="s" color="whiteBtn">
        ms
      </Button>
      <Button size="tabActiv" color="tabActiv">
        tabActiv
      </Button>
      <Button size="tabActiv" color="tabActiv" disabled={true}>
        tabActiv disabled
      </Button>
      <Button size="tabActiv" color="tabMenu">
        tabActiv disabled
      </Button>
    </div>
  );
}

export default Navbar;
