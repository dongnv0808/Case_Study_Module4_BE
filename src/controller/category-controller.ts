import { NextFunction, query, Request, Response } from "express";
import { Category } from "../model/category";

class CategoryController{
    getAll = async (req: any, res:Response) =>{
        let idUser = req.decoded.idUser;
        let limit = 10;
        let offset = 0;
        let query = req.query.page;
        let page = 1;
        if(query){
            page = +query;
        }
        offset = (page - 1) * limit
        let categories = await Category.find({idUser: idUser}).limit(limit).skip(offset);
        let totalCategory = await Category.countDocuments({})
        let totalPage = Math.ceil(totalCategory/limit);
        res.status(200).json({
            categories: categories,
            totalPage: totalPage,
            currentPage: page
        });
    };
    addCategory = async (req: any, res:Response, next: NextFunction) =>{
        try{
            let idUser = req.decoded.idUser
            let category = req.body;
            category.idUser = idUser;
            let categories = await Category.create(category);
            res.status(201).json(categories);
        }catch(err){
            next(err);
        }
    };

    updateCategory = async (req: any, res: Response, next: NextFunction) =>{
        try{
            let id = req.params.id;
            let idUser = req.decoded.idUser;
            let category = await Category.findById(id);
            if(!category){
                res.status(404).json;
            }else{
                let data = req.body;
                data._id = id;
                data.idUser = idUser;
                await Category.findByIdAndUpdate({
                    _id:id
                },data);
                res.status(200).json(data);   
            }
        } catch(err) {
            next(err)
        }
    }

    deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try{
            let category = await Category.findById(id);
            if(category){
               category.delete();
               res.status(204).json(); 
            }else{
                res.status(404).json();
            }
        }catch(err){
            next(err);
        }
    };
    getCategory = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        let category = await Category.findById(id);
        try{
            if(!category){
                res.status(404).json();
            }else{
                res.status(200).json(category);
            }
        }catch(err){
            next(err);
        }
    };

}
export default new CategoryController();