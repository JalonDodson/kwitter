import { enhancer } from "./Profile.enhancer";
import { enhancer as currentEnhancer } from "./Current.enhancer";
import { ProfileScreen } from "./Profile";
import { CurrentScreen } from "./Current";

export * from "./Home";
export * from "./Current";
export * from "./Profile";
export * from "./NotFound";

export const Profile = enhancer(ProfileScreen);
export const TheCurrent = currentEnhancer(CurrentScreen);
