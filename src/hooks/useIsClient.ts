import { useEffect, useState } from "react";

const useIsClient = () => {
  return typeof window !== 'undefined'
};

export default useIsClient;
