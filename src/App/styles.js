// Dependencies
import styled from "styled-components/native";

export const StatusBar = styled.StatusBar.attrs({
  barStyle: "light-content",
  backgroundColor: "#7159c1",
})``;

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: #7159c1;
`;

export const RepositoryContainer = styled.View`
  margin-right: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  padding: 20px;

  background-color: #ffffff;
`;

export const RepositoryName = styled.Text`
  font-size: 32px;
  font-weight: 700;
`;

export const TechsContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const TechBadge = styled.Text`
  padding: 5px 10px;
  margin-right: 10px;

  color: #ffffff;
  font-size: 12px;
  font-weight: 700;

  background-color: #04d351;
`;

export const LikesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const HowManyLikesText = styled.Text`
  margin-right: 10px;

  font-size: 14px;
  font-weight: 700;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  padding: 15px;
  margin-right: 10px;

  color: #ffffff;
  font-size: 14px;
  font-weight: 700;

  background-color: #7159c1;
`;
