import styled from "styled-components";
import { centerBlock, widthHeight, font, flexCenter } from "helpers/mixins";

export const Card = styled.div`
  ${widthHeight(400)};
  ${centerBlock};

  border-radius: ${(props) => props.theme.spacing(1)};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
`;

export const UserInfoWrapper = styled.div`
  text-align: center;
  padding: 40px 0;
`;

export const Avatar = styled.img`
  ${widthHeight(100, 100)};
  ${centerBlock};
  margin-bottom: ${(props) => props.theme.spacing(9)};
  border-radius: 50%;
  overflow: hidden;
  background: ${(props) => props.theme.colors.greyBg};
`;

export const UserName = styled.p`
  ${font({ fs: 24, fw: 600, lh: 32 })};
  margin-bottom: ${(props) => props.theme.spacing(3)};
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  ${font({ fs: 16, fw: 500, lh: 20 })};
  color: ${(props) => props.theme.colors.grey};

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing(3)};
  }
`;

export const StatsList = styled.ul`
  ${flexCenter({ jc: "space-between" })};
  border-top: 1px solid ${(props) => props.theme.colors.greyOpacity};
  background-color: ${(props) => props.theme.colors.greyBg};
`;

export const StatsItem = styled.li`
  ${flexCenter};
  flex-direction: column;
  width: calc(100% / 3);
  padding: ${(props) => props.theme.spacing(9)} 0;

  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.colors.greyOpacity};
  }
`;

export const Label = styled.span`
  ${font({ fs: 16, fw: 400, lh: 18 })};
  color: ${(props) => props.theme.colors.grey};
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const Value = styled.span`
  ${font({ fs: 18, fw: 500, lh: 20 })};
  color: ${(props) => props.theme.colors.secondaryText};
`;
