// ide kerülnek a tailwind egyesített osztályok
// productionban már csak úgy néz ki hogy pl: className={styles.paragraph}

const styles = {
  heading2:
    "font-semibold font-poppins xd:leading-[76px] leading-[66px] w-full text-[36px] leading-[44px]",
  paragraph: "font-poppins text-[18px] leading-[31px] ",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  textHover: "duration-200 ease-in-out hover:text-verdigris-500 cursor-pointer",
};

export default styles;
