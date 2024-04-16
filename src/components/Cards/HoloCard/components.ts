import Name from "./Name.astro";
import Tagline from "./Tagline.astro";
import Body from "./Body.astro";
import Tip from "./Tip.astro";
import Top from "../NormalCard/Top.astro";
import Button from "./Button.astro";
import Art from "./Art.astro";
import ArtSection from "./ArtSection.astro";
import Mark from "./Mark.astro";
import Box from "./Box.astro";
import BoxNumber from "./BoxNumber.astro";
import BoxList from "./BoxList.astro";
import More from "../../More.astro";

export const components = {
  Name,
  Tagline,
  Body,
  Tip,
  Button,
  Art,
  Mark,
  Box,
  BoxNumber,
  BoxList,
  ArtSection,
  Top,
  Card: More,
};

export default components;
