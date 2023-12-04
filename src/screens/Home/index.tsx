import React, { useEffect, useState } from "react";
import { HomeHeader } from "../../components/HomeHeader";
import {
  Container,
  IconSearch,
  InputContent,
  InputText,
  ContentFlat,
} from "./styles";
import axios from "axios";
import { FlatList } from "react-native";
import { ImageCard } from "../../components/ImageCard";
import MasonryList from "@react-native-seoul/masonry-list";
import { RecipesCard } from "../../components/RecipesCard";
import { useNavigation } from "@react-navigation/native";

interface CategoryProps {
  idCategory: string;
  strCategoryThumb: string;
  strCategory: string;
}

interface CategoryRecipesProps {
  strMealThumb: string;
  strMeal: string;
}

export function Home() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [recipes, setRecipes] = useState<CategoryRecipesProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Beef");

  const navigation = useNavigation();

  async function getCategories() {
    try {
      const { data } = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );

      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRecipes(category: string) {
    try {
      const { data } = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );

      setRecipes(data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGetRecipes(category) {
    setSelectedCategory(category);
    getRecipes(category);
  }

  function handleDetails(receita: string) {
    navigation.navigate("details", { receita });
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getRecipes(selectedCategory);
  }, [selectedCategory]);

  return (
    <Container>
      <HomeHeader />
      <InputContent>
        <InputText />
        <IconSearch name="search" />
      </InputContent>

      <ContentFlat>
        <FlatList
          data={categories}
          keyExtractor={(item: any) => item.idCategory}
          renderItem={({ item }) => (
            <ImageCard
              image={item.strCategoryThumb}
              title={item.strCategory}
              onPress={() => handleGetRecipes(item.strCategory)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </ContentFlat>
      <MasonryList
        data={recipes}
        keyExtractor={(item): any => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => (
          <RecipesCard
            image={item.strMealThumb}
            title={item.strMeal}
            onPress={() => handleDetails(item)}
          />
        )}
      />
    </Container>
  );
}
