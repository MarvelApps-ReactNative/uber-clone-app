import { Alert, Share } from "react-native";

export const onShare = async (Text:string) => {
    
    try {
      const result = await Share.share({
        message:Text,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
