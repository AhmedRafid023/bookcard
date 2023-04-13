// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default async function handler(req, res) {
    console.log(req.body)
	const { userId, name, address, description, image, price } = req.body;

    try{
        await prisma.place.create({
            data: {
                name: name,
                address: address,
                description: description,
                image: image,
                price: price,
                userId: userId,
            }
        });
        return res.status(200).send({
            status: true,
        });
    }catch(err){
        console.log(err);
        return res.status(400).send({
            meesage: err.message,
            status: true,
        });
    }


        



}
