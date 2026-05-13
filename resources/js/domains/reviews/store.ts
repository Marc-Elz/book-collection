import { storeModuleFactory } from "../../services/store";
import { reviewType } from "../../services/store/storetypes";

const reviewStore = storeModuleFactory("reviews");

export const getAllReviews = reviewStore.getters.all;
export const getReviewById = reviewStore.getters.getById;

export const fetchReviews = async () => {
    return await reviewStore.actions.getAll();
};

export const createReview = async (newReview: reviewType) => {
    return reviewStore.actions.create(newReview);
};

export const updateReview = async (
    id: number | string,
    updatedReview: reviewType,
) => {
    return await reviewStore.actions.update(id, updatedReview);
};

export const deleteReview = async (id: number) => {
    return await reviewStore.actions.delete(id);
};
