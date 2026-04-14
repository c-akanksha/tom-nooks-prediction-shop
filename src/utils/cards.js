import nook1 from "../assets/nook1.png";
import isabelle from "../assets/isabelle.png";
import resseti from "../assets/resseti.png";
import isabelle1 from "../assets/isabelle1.png";
import blanther from "../assets/blanther.png";
import star from "../assets/star.png";
import { fetchNook, resetNook } from "../slices/nookSlice";
import { fetchIsabelle, resetIsabelle } from "../slices/isabelleSlice";
import { fetchFish, resetFish } from "../slices/fishSlice";
import { fetchVillager, resetVillager } from "../slices/villagerSlice";
import { fetchGift, resetGift } from "../slices/giftSlice";
import {
  fetchFishingDecision,
  resetDecision,
} from "../slices/fishingDecisionSlice";
import { data } from "./data";

export const cards = [
  {
    id: "nook-revenue",
    title: "Nook's Revenue Estimator",
    icon: nook1,
    subtitle: "Predict item resale value and market trends with Tom Nook.",
    navigateTo: "/nook",
    selector: "nook",
    findResult: fetchNook,
    resetData: resetNook,
    character: {
      name: "Tom Nook",
      emoji: "🦝",
      greeting: "Welcome! Let me help you estimate your profits, yes yes!",
    },
    inputs: [
      {
        name: "buy_price",
        label: "Buy Price (Bells)",
        type: "number",
        helper: "How much did you pay for the items at Nook's Cranny?",
      },
    ],
    actionLabel: "Consult Nook",
  },
  {
    id: "isabelle-desk",
    title: "Isabelle's Decision Desk",
    icon: isabelle,
    subtitle:
      "Will your gift be returned? Ask Isabelle for a social vibe check.",
    navigateTo: "/isabelle",
    selector: "isabelle",
    findResult: fetchIsabelle,
    resetData: resetIsabelle,
    character: {
      name: "Isabelle",
      emoji: "🐶",
      greeting:
        "Happy to help! Let's check the social vibes of your gift idea!",
    },
    inputs: [
      {
        name: "sell_price",
        label: "Selling Price of the gift",
        type: "number",
        helper: "The base value of the item you're planning to give.",
      },
    ],
    actionLabel: "Ask Isabelle",
  },
  {
    id: "fish-optimizer",
    title: "Resetti's Fish Optimizer",
    icon: resseti,
    subtitle: "Estimate fish prices and catch value with Resetti’s expertise.",
    navigateTo: "/fish-price",
    selector: "fish",
    findResult: fetchFish,
    resetData: resetFish,
    character: {
      name: "Mr. Resetti",
      emoji: "🦫",
      greeting: "GET OUT THERE AND FISH! And don't you dare reset the catch!",
    },
    inputs: [
      {
        name: "shadow_size",
        label: "Shadow Size",
        type: "select",
        options: data.shadow_sizes,
        helper: "Look closely at the water! Is the shadow tiny or huge?",
      },
      {
        name: "location",
        label: "Location",
        type: "select",
        options: data.locations,
        helper: "Where are you casting your line? River, Sea, or Pond?",
      },
    ],
    actionLabel: "Appraise Catch",
  },
  {
    id: "villager-classifier",
    title: "Villager Classifier",
    icon: isabelle1,
    subtitle: "Assess traits and personalities based on hobbies.",
    navigateTo: "/villager-classifier",
    selector: "villager",
    findResult: fetchVillager,
    resetData: resetVillager,
    character: {
      name: "Isabelle",
      emoji: "📋",
      greeting:
        "Let's organize our resident data to better understand our community!",
    },
    inputs: [
      {
        name: "hobby",
        label: "Observed Hobby",
        type: "text",
        helper: "What do you see them doing? (e.g., Fitness, Music, Nature)",
      },
    ],
    actionLabel: "Classify Personality",
  },
  {
    id: "gift-recommender",
    title: "Blathers' Gift Guide",
    icon: blanther,
    subtitle:
      "Find the perfect gift specimen with Blathers’ curated suggestions.",
    navigateTo: "/gift-recommendation",
    selector: "gift",
    findResult: fetchGift,
    resetData: resetGift,
    character: {
      name: "Blathers",
      emoji: "🦉",
      greeting:
        "Hoo! My apologies, I was just... thinking! Looking for a specimen?",
    },
    inputs: [
      {
        name: "species",
        label: "Species",
        type: "select",
        options: data.species,
        helper: "What kind of creature is your neighbor?",
      },
      {
        name: "personality",
        label: "Personality",
        type: "select",
        options: data.personalities,
        helper: "How do they usually act when you talk to them?",
      },
      {
        name: "color",
        label: "Color",
        type: "text",
        helper: "Try to match their favorite color!",
      },
    ],
    actionLabel: "Consult Blathers",
  },
  {
    id: "fishing-stars",
    title: "Celeste's Fishing Stars",
    icon: star,
    subtitle: "Consult the cosmos to see if your catch is truly high-value.",
    navigateTo: "/fishing-decision",
    selector: "fishingDecision",
    findResult: fetchFishingDecision,
    resetData: resetDecision,
    character: {
      name: "Celeste",
      emoji: "🦉✨",
      greeting:
        "The stars are particularly bright tonight! Looking for a sign?",
    },
    inputs: [
      {
        name: "shadow",
        label: "Shadow Size",
        type: "select",
        options: data.shadow_sizes,
        helper: "The size of the silhouette appearing in the water.",
      },
      {
        name: "location",
        label: "Location",
        type: "select",
        options: data.locations,
        helper: "The specific body of water you're observing.",
      },
      {
        name: "spawn_rate",
        label: "Spawn Rate",
        type: "number",
        helper: "The frequency this fish appears (check your Critterpedia!)",
      },
    ],
    actionLabel: "Read the Stars",
  },
];
