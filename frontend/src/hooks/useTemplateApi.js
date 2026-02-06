import { useState } from 'react';
import apiService from '@/services/api';

export const useTemplateApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateTemplate = async (templateData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiService.generateTemplate(templateData);
            setLoading(false);
            return response;
        } catch (err) {
            setError(err.message);
            setLoading(false);
            throw err;
        }
    };

    const searchTemplates = async (searchParams) => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiService.searchTemplates(searchParams);
            setLoading(false);
            return response;
        } catch (err) {
            setError(err.message);
            setLoading(false);
            throw err;
        }
    };

    const downloadTemplate = async (templateId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiService.downloadTemplate(templateId);
            setLoading(false);
            return response;
        } catch (err) {
            setError(err.message);
            setLoading(false);
            throw err;
        }
    };

    const getTemplates = async (params) => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiService.getTemplates(params);
            setLoading(false);
            return response;
        } catch (err) {
            setError(err.message);
            setLoading(false);
            throw err;
        }
    };

    const deleteTemplate = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiService.deleteTemplate(id);
            setLoading(false);
            return response;
        } catch (err) {
            setError(err.message);
            setLoading(false);
            throw err;
        }
    };

    const uploadImage = async (file) => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiService.uploadImage(file);
            setLoading(false);
            return response;
        } catch (err) {
            setError(err.message);
            setLoading(false);
            throw err;
        }
    };

    return {
        loading,
        error,
        generateTemplate,
        searchTemplates,
        downloadTemplate,
        getTemplates,
        deleteTemplate,
        uploadImage,
    };
};
