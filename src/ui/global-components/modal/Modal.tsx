import ReactDOM from "react-dom";
import { toast } from "react-toastify";

import { useModalContext } from "../../../context/modal-context";
import { useThemeContext } from "../../../context/theme-context";
import { Heading4, Paragraph } from "../../Typography";
import {
  Card,
  ColorButton,
  ColorContentWrapper,
  ColorsWrapper,
  ModalWrapper,
} from "./styled";

const primaryColors = [
  { name: "Blue", hue: 205 },
  { name: "Green", hue: 120 },
  { name: "Red", hue: 0 },
  { name: "Purple", hue: 280 },
  { name: "Orange", hue: 30 },
  { name: "Yellow", hue: 60 },
];

function Modal() {
  const { updateTheme } = useThemeContext();
  const { isOpen, closeModal } = useModalContext();

  const handleColorChange = (newHue: number) => {
    try {
      updateTheme(newHue);
      toast.success("Color updated successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Color update failed. Please try again.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const modalContent = (
    <ModalWrapper onClick={closeModal}>
      <Card onClick={(e) => e.stopPropagation()}>
        <Heading4>Theme customization</Heading4>
        <ColorContentWrapper>
          <Paragraph>Select your favorite color</Paragraph>
          <ColorsWrapper>
            {primaryColors.map((color) => (
              <ColorButton
                key={color.name}
                hue={color.hue}
                onClick={() => handleColorChange(color.hue)}
              ></ColorButton>
            ))}
          </ColorsWrapper>
        </ColorContentWrapper>
      </Card>
    </ModalWrapper>
  );

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          modalContent,
          document.querySelector("#overlays")!,
        )}
    </>
  );
}

export default Modal;
