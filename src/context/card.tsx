import { TCardTypeValue } from "@/types/card";
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
};

export const CardContext = createContext<TCardContext>({} as TCardContext);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cardType, setCardType] = useState<TCardTypeValue>("normal");
  const [cardName, setCardName] = useState<string>("");

  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current);
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "meu-card.png";
    link.click();
  };

  const handleChangeCardType = (value: TCardTypeValue) => {
    setCardType(value);
  };

  const handleChangeCardName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setCardName(value);
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
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
