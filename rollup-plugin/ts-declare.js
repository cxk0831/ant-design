const plugin = () => {
  return {
    name: 'ts-declare',
    transform(code) {
      let newCode = code;
      if (newCode.includes('declare module')) {
        return newCode.replace(/declare module.*{((.|\n)*)}/, (_, param2) => {
          return param2;
        });
      }
      return null;
    },
    renderChunk(code) {
      let newCode = code;
      if (newCode.includes('declare module')) {
        return newCode.replace(/declare module.*{((.|\n)*)}/, (_, param2) => {
          return param2;
        });
      }
      return null;
    },
  };
};

export { plugin as default };
