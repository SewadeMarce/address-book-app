//import type { ContactType } from 'server/types';
import Contact from '../models/Contacts';
import type { Request, Response } from 'express';

export const getAll = async (req: Request, res: Response) => {
    try {
        const contacts = await Contact.find();
        res.json({
            success: true,
            status: 200,
            contacts,
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des contacts:', error);
        res.json({
            succes: false,
            status: 500,
            error: 'Erreur serveur'
        });
    }
};
export const getById = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const contact = await Contact.findById(id);
        if (!contact) {
            res.status(404).json( {
                success: false,
                status: 404,
                error: 'Contact non trouvé',
            })
        }
        res.status(200).json ({
            success: true,
            status: 200,
            contact: JSON.parse(JSON.stringify(contact)),
        });
    } catch (error) {
        console.error('Erreur lors de la récupération du contact:', error);
        res.status(500).json ({
            succes: false,
            status: 500,
            error: 'Erreur serveur'
        });
    }
};
export const getByUser = async (userId: string) => {
    try {
        const contacts = await Contact.find().
            where('userId').equals(userId);

        (contacts)
        return {
            success: true,
            status: 200,
            contacts: JSON.parse(JSON.stringify(contacts)),
        };
    } catch (error) {
        console.error('Erreur lors de la récupération des contacts:', error);
        return {
            succes: false,
            status: 500,
            error: 'Erreur serveur'
        };
    }
};

export const create = async (req: Request, res: Response) => {
    const body = {
        ...req.body,
        userId: req.userId
    };

    try {
        const newContact = new Contact(body);
        const savedContact = await newContact.save();
        res.status(201).json({
            success: true,
            status: 201,
            savedContact,
        });
    } catch (error: any) {
        console.error('Erreur lors de la création du contact:', error.message);
        res.status(500).json({
            success: false,
            status: 500,
            error: 'Erreur interne',
            message: error.message
        });
    }
};

export const update = async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = {
        ...req.body,
        userId: req.userId
    }
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            id,
            body,
            { new: true, runValidators: true }
        );
        if (!updatedContact) {
            return {
                success: false,
                status: 404,
                error: 'Contact non trouvé',
            }
        }
        return {
            success: true,
            status: 201,
            updatedContact,
        };
    } catch (error: any) {
        console.error('Erreur lors de la mise à jour du contact:', error);
        return {
            succes: false,
            status: 500,
            error: 'Erreur serveur'
        };
    }
};
export const pushFavorite = async (req: Request, res: Response) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            { favorite: req.body.favorite },
            { new: true, runValidators: true }
        );
        if (!updatedContact) {
            return {
                success: false,
                status: 404,
                error: 'Contact non trouvé',
            }
        }
        return {
            success: true,
            status: 201,
            updatedContact,
        };
    } catch (error: any) {
        console.error('Erreur lors de la mise à jour du contact:', error);
        return {
            succes: false,
            status: 500,
            error: 'Erreur serveur'
        };
    }
};
export const deleteById = async (req: Request, res: Response) => {

    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            res.status(404).json({
                success: false,
                status: 404,
                error: 'Contact non trouvé',
            })
        }
        res.status(201).json({
            success: true,
            status: 201,
            deletedContact,
            message: 'Contact supprimé avec succès',

        });
    } catch (error) {
        console.error('Erreur lors de la suppression du contact:', error);
        res.status(500).json({
            succes: false,
            status: 500,
            error: 'Erreur serveur'
        });
    }
};

export const search = async (req: Request, res: Response) => {

    const userId = req.params.id;
    const q = req.query.q as string || "";
    try {
        const query = q ? {
            $or: [
                { name: { $regex: q, $options: 'i' } },
                { emails: { $regex: q, $options: 'i' } },
                { phones: { $regex: q, $options: 'i' } }
            ]
        } : {};

        const contacts = await Contact.find(query).
            where('userId').
            equals(userId);
        console.log({
            success: true,
            status: 200,
            contacts
        })
        res.status(200).json({
            success: true,
            status: 200,
            contacts
        });
    } catch (error) {
        console.error('Erreur lors de la recherche:', error);
        res.status(500).json({
            success: false,
            status: 500,
            error: 'Erreur serveur'
        });
    }
};
