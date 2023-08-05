"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("29d7838e-869e-4d02-b50d-8b2009eac234");
  }, []);

  return null;
};
