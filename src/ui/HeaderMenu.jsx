import { HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";

export default function HeaderMenu() {
  const StyledHeaderMenu = styled.ul`
    display: flex;
    gap: 0.4rem;
  `;

  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
