import { useEffect, useState } from "react";
import {
  Container,
  ImageDetail,
  Content,
  Subtitle,
  Title,
  ContainerInformationFood,
  Mins,
  IconMins,
  Minutes,
  TextMinutes,
  TextIngredient,
  TextMeasure,
  ContentMeasure,
  TextInstructions,
  TextModoPreparo,
  ButtonBack,
  TextButton,
} from "./styles";
import axios from "axios";
import { ScrollView } from "react-native";

interface CategoryProps {
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strInstructions: string;
}

export function DetailsFood({ route }) {
  const [category, setCategory] = useState<CategoryProps>();

  const { receita } = route.params;

  async function getDetailsMeal() {
    try {
      const { data } = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${receita.idMeal}`
      );

      if (data.meals && data.meals.length > 0) {
        setCategory(data.meals[0]);
      } else {
        // Adicione tratamento para quando a resposta da API não contém meals
        console.log("Resposta da API inválida");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetailsMeal();
  }, []);

  return (
    <Container>
      <ImageDetail source={{ uri: receita.strMealThumb }} resizeMode="cover" />
      <Content>
        <Title>{receita.strMeal}</Title>
        <Subtitle>{category?.strCategory}</Subtitle>
      </Content>
      <ContainerInformationFood>
        <Mins>
          <IconMins name="clock" />
          <Minutes>5</Minutes>
          <TextMinutes>minutos</TextMinutes>
        </Mins>
        <Mins>
          <IconMins name="users" />
          <Minutes>3</Minutes>
          <TextMinutes>pessoas</TextMinutes>
        </Mins>
        <Mins>
          <IconMins name="thermometer" />
          <Minutes>103</Minutes>
          <TextMinutes>Temperatura</TextMinutes>
        </Mins>
        <Mins>
          <IconMins name="layers" />
          <TextMinutes>Fácil</TextMinutes>
        </Mins>
      </ContainerInformationFood>
      <ScrollView>
        <ContentMeasure>
          <TextIngredient>Ingredientes:</TextIngredient>
          <TextMeasure>{category?.strMeasure1}</TextMeasure>
          <TextMeasure>{category?.strMeasure2}</TextMeasure>
          <TextMeasure>{category?.strMeasure3}</TextMeasure>
          <TextMeasure>{category?.strMeasure4}</TextMeasure>
          <TextMeasure>{category?.strMeasure5}</TextMeasure>
          <TextMeasure>{category?.strMeasure6}</TextMeasure>
          <TextMeasure>{category?.strMeasure7}</TextMeasure>
          <TextMeasure>{category?.strMeasure8}</TextMeasure>
          <TextMeasure>{category?.strMeasure9}</TextMeasure>
          <TextMeasure>{category?.strMeasure10}</TextMeasure>
          <TextMeasure>{category?.strMeasure11}</TextMeasure>
          <TextModoPreparo>Modo de Preparo:</TextModoPreparo>
          <TextInstructions>{category?.strInstructions}</TextInstructions>
        </ContentMeasure>
      </ScrollView>
      <ButtonBack>
        <TextButton>Voltar</TextButton>
      </ButtonBack>
    </Container>
  );
}
