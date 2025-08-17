import {
  TCardAttributeValue,
  TCardLevelStarType,
  TCardLevelValue,
  TCardTypeValue,
} from "@/types/card";
import html2canvas from "html2canvas";
import {
  ChangeEvent,
  createContext,
  ReactNode,
  RefObject,
  useRef,
  useState,
} from "react";

type TCardContext = {
  cardType: TCardTypeValue;
  handleChangeCardType: (value: TCardTypeValue) => void;
  cardName: string;
  handleChangeCardName: (e: ChangeEvent<HTMLInputElement>) => void;
  cardRef: RefObject<HTMLDivElement | null>;
  handleDownload: () => void;
  handleImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  cardImage: string | null;
  cardAttribute: TCardAttributeValue | "trap" | "spell";
  handleChangeCardAttribute: (value: TCardAttributeValue) => void;
  handleChangeCardLevel: (value: TCardLevelValue) => void;
  cardLevel: TCardLevelValue;
  cardLevelStarType: TCardLevelStarType;
  handleChangeCardMonsterType: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeCardDescription: (e: ChangeEvent<HTMLInputElement>) => void;
  monsterType: string;
  cardDescription: string;
};

export const CardContext = createContext<TCardContext>({} as TCardContext);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cardType, setCardType] = useState<TCardTypeValue>("normal");
  const [cardName, setCardName] = useState<string>("");
  const [cardAttribute, setCardAttribute] = useState<
    TCardAttributeValue | "trap" | "spell"
  >("dark");
  const [cardImage, setCardImage] = useState<string | null>(null);
  const [cardLevel, setCardLevel] = useState<TCardLevelValue>(1);
  const [cardLevelStarType, setCardLevelStarType] =
    useState<TCardLevelStarType>("positive");
  const [monsterType, setMonsterType] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  const cardRef = useRef<HTMLDivElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCardImage(imageUrl);
    }
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current);
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "meu-card.png";
    link.click();
  };

  const handleSetDefaultCardAttribute = (value: TCardTypeValue) => {
    if (value === "trap") {
      handleChangeCardAttribute("trap");
    }

    if (value === "spell") {
      handleChangeCardAttribute("spell");
    }

    if (value !== "spell" && value !== "trap") {
      handleChangeCardAttribute("dark");
    }
  };

  const handleSetDefaultCardLevelStarType = (value: TCardTypeValue) => {
    if (value === "xyz") {
      setCardLevelStarType("rank");
    }

    if (value === "darkSynchro") {
      setCardLevelStarType("negative");
    }

    if (
      value !== "xyz" &&
      value !== "darkSynchro" &&
      value !== "spell" &&
      value !== "trap"
    ) {
      setCardLevelStarType("positive");
    }

    if (value === "trap" || value === "spell") {
      setCardLevelStarType(null);
    }
  };

  const handleChangeCardType = (value: TCardTypeValue) => {
    handleSetDefaultCardAttribute(value);
    handleSetDefaultCardLevelStarType(value);

    setCardType(value);
  };

  const handleChangeCardName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardName(value);
  };

  const handleChangeCardAttribute = (
    value: TCardAttributeValue | "trap" | "spell"
  ) => {
    setCardAttribute(value);
  };

  const handleChangeCardLevel = (value: TCardLevelValue) => {
    setCardLevel(value);
  };

  const handleChangeCardMonsterType = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMonsterType(value);
  };

  const handleChangeCardDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardDescription(value);
  };

  return (
    <CardContext.Provider
      value={{
        cardType,
        handleChangeCardType,
        cardName,
        handleChangeCardName,
        cardRef,
        handleDownload,
        handleImageChange,
        cardImage,
        cardAttribute,
        handleChangeCardAttribute,
        handleChangeCardLevel,
        cardLevel,
        cardLevelStarType,
        handleChangeCardMonsterType,
        handleChangeCardDescription,
        monsterType,
        cardDescription,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
