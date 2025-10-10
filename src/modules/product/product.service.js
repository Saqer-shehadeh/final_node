import { AppError } from "../../utils/AppError.js"
import { validateAttributes } from "../../utils/validateAttributes.js"
import * as data from "./product.data.js"
import { getSubCategoryForProduct } from "../subcategory/subcategory.data.js"
import { getPagingData } from "../../utils/pagination.js/pagination.js"
import objectId from "../../validation/objectId.validator.js"
import { getCategoryById } from "../category/category.data.js"
import deleteImageFile from "../../utils/images/deleteImageFile.js"



export const createProduct = async (body) => {

    const isValid = validateAttributes(body.category, body.attributes)
    if (!isValid) throw new AppError("invalid attributes ", 400)
    const subCategory = await getSubCategoryForProduct(body.category, body.subCategory)
    if (!subCategory) throw new AppError("invalid subCategory for this category", 400)

    if (body.discount > 0) {
        body.finalPrice = body.price * (1 - body.discount / 100)
    }
    const product = await data.createProduct(body)
    return product
}

export const getAll = async (page, limit, skip) => {
    const products = await data.getAll(limit, skip);
    if (products.count === 0) throw new AppError("no products found", 404)
    const paginated = getPagingData(products, page, limit)
    return paginated
}
export const getProductById = async (id) => {
    const validId = objectId(id)
    if (!validId) throw new AppError("invalid id", 400)
    const product = await data.getProductById(id)
    if (!product) throw new AppError("no product found", 404)
    return product
}

export const updateProduct = async (id, body) => {
    const validId = objectId(id)
    if (!validId) throw new AppError("invalid id", 400)
    const product = await data.getProductById(id)
    if (!product) throw new AppError("no product found", 404)
    if (body.category && !body.attributes) {
        throw new AppError("attributes is required when you update category", 400)

    } else if (body.attributes && !body.category) {
        const attr = validateAttributes(product.category, body.attributes)
        if (!attr) throw new AppError("invalid attributes for this category", 400)
    } else if (body.category && body.attributes) {
        const category = await getCategoryById(body.category)
        if (!category) throw new AppError("no category found", 404)
        const attr = validateAttributes(body.category, body.attributes)
        if (!attr) throw new AppError("invalid attributes for this category", 400)
    }
    if (body.subCategory) {
        if (!body.category) {
            const subCategory = await getSubCategoryForProduct(product.category, body.subCategory)
            if (!subCategory) throw new AppError("invalid subCategory for this category", 400)
        } else {
            const subCategory = await getSubCategoryForProduct(body.category, body.subCategory)
            if (!subCategory) throw new AppError("invalid subCategory for this category", 400)
        }

    }
    if (body.price && body.discount) {
        body.finalPrice = body.price * (1 - body.discount / 100)
    } else if (body.price && !body.discount) {
        body.finalPrice = body.price * (1 - product.discount / 100)
    } else if (!body.price && body.discount) {
        body.finalPrice = product.price * (1 - body.discount / 100)
    }
    const updated = await data.updateProduct(id, body)
    return updated
}

export const deleteProduct = async (id) => {
    const validId = objectId(id)
    if (!validId) throw new AppError("invalid id", 400)
    const product = await data.getProductById(id)
    if (!product) throw new AppError("no product found", 404)
    if (product.mainImage) {
        deleteImageFile(product.mainImage)
    }
    if (product.subImages && product.subImages.length > 0) {
        product.subImages.forEach((image) => {
            deleteImageFile(image)
        })
    }


    const deleted = await data.deleteProduct(id)
    return deleted
}