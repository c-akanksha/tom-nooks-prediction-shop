import { configureStore } from "@reduxjs/toolkit";
import fishingDecisionSlice from "./fishingDecisionSlice";
import fishSlice from "./fishSlice";
import giftSlice from "./giftSlice";
import isabelleSlice from "./isabelleSlice";
import nookSlice from "./nookSlice";
import shopSlice from "./shopSlice";
import villagerSlice from "./villagerSlice";

export const store = configureStore({
  reducer: {
    fishingDecision: fishingDecisionSlice,
    fish: fishSlice,
    gift: giftSlice,
    isabelle: isabelleSlice,
    nook: nookSlice,
    shop: shopSlice,
    villager: villagerSlice,
  },
});
