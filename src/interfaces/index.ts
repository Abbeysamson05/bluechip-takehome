import { ReactElement, ReactNode } from "react";

export interface sidebarIcon {
  id: number;
  icon: ReactNode;
}

export interface accountCard {
  id: number;
  isVisa: boolean;
  amount: string;
  cardType: string;
  cardNumber: number;
  gradient?: string;
}

export interface settingCard {
  id: number;
  text: string;
  icon: ReactNode;
}

export interface cardBtn {
  id: number;
  text: string;
}

export interface contentCard {
  id: number;
  text: string;
  amount: string;
}

export interface placeCard {
  id: number;
  text: string;
  quantity: number;
  amount: string;
}
