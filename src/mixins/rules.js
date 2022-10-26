export default {
  data: () => ({
    isRequired: (value) =>
      !!(value || "").toString().trim() || "this field is required",
  }),
};
