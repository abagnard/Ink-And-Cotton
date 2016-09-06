export const ReveiwConstants = {
  CREATE_REVIEW: "CREATE_REVIEW"
};

export const createReview = review => ({
  type: ReveiwConstants.CREATE_REVIEW,
  review
});
