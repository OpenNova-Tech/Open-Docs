"use client"

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function LanguagePage() {
	const numerical = [
		{
			title: "NumPy",
			description: "",
			link: "aiml/numpy",
			iconSrc: "icons/bot/numpy.svg"
		},
		{
			title: "SciPy",
			description: "",
			link: "aiml/scipy",
			iconSrc: "icons/bot/scipy.svg"
		},
		{
			title: "SymPy",
			description: "",
			link: "aiml/sympy",
			iconSrc: "icons/bot/sympy.svg"
		},
	]

	const analysis = [
		{
			title: "Pandas",
			description: "",
			link: "aiml/pandas",
			iconSrc: "icons/bot/pandas.svg"
		},
		{
			title: "Dask",
			description: "",
			link: "aiml/dask",
			iconSrc: "icons/bot/dask.svg"
		},
		{
			title: "Polars",
			description: "",
			link: "aiml/polars",
			iconSrc: "icons/bot/polars.svg"
		},
	]

	const visualization = [
		{
			title: "Matplotlib",
			description: "",
			link: "aiml/matplotlib",
			iconSrc: "icons/bot/matplotlib.svg"
		},
		{
			title: "Plotly",
			description: "",
			link: "aiml/plotly",
			iconSrc: "icons/bot/plotly.svg"
		},
	]

	const classical = [
		{
			title: "Scikit-Learn",
			description: "",
			link: "aiml/scikit",
			iconSrc: "icons/bot/scikit.svg"
		},
	]

	const deep = [
		{
			title: "Tensorflow",
			description: "",
			link: "aiml/tensorflow",
			iconSrc: "icons/bot/tensorflow.svg"
		},
		{
			title: "Keras",
			description: "",
			link: "aiml/keras",
			iconSrc: "icons/bot/keras.svg"
		},
		{
			title: "Pytorch",
			description: "",
			link: "aiml/pytorch",
			iconSrc: "icons/bot/pytorch.svg"
		},
	]

	const natural = [
		{
			title: "SpaCy",
			description: "",
			link: "aiml/spacy",
			iconSrc: "icons/bot/spacy.svg"
		},
		{
			title: "Hugging Face",
			description: "",
			link: "aiml/hugging",
			iconSrc: "icons/bot/hugging.svg"
		},
		{
			title: "LangChain",
			description: "",
			link: "aiml/langchain",
			iconSrc: "icons/bot/langchain.svg"
		},
	]

	const vision = [
		{
			title: "OpenCV",
			description: "",
			link: "aiml/opencv",
			iconSrc: "icons/bot/opencv.svg"
		},
	]

	const data = [
		{
			title: "Prefect",
			description: "",
			link: "aiml/prefect",
			iconSrc: "icons/bot/prefect.svg"
		},
		{
			title: "MLflow",
			description: "",
			link: "aiml/mlflow",
			iconSrc: "icons/bot/mlflow.svg"
		},
		{
			title: "Kedro",
			description: "",
			link: "aiml/kedro",
			iconSrc: "icons/bot/kedro.svg"
		},
		{
			title: "DVC",
			description: "",
			link: "aiml/dvc",
			iconSrc: "icons/bot/dvc.svg"
		},
	]

	const editor = [
		{
			title: "Jupyter Notebook",
			description: "",
			link: "aiml/jupyter",
			iconSrc: "icons/bot/jupyter.svg"
		},
	]


	return (
		<div className="max-w-5xl mt-20 mx-auto px-8 py-12">
			Numerical and Scientific Computing
			<HoverEffect items={numerical} />
			Data Analysis and Manipulation
			<HoverEffect items={analysis} />
			Data Visualiztion 
			<HoverEffect items={visualization} />
			Classical Machine Learning
			<HoverEffect items={classical} />
			Deep Learning 
			<HoverEffect items={deep} />
			Natural Language Processing (NLP)
			<HoverEffect items={natural} />
			Computer Vision
			<HoverEffect items={vision} />
			Data Engineering
			<HoverEffect items={data} />
			Development Environment
			<HoverEffect items={editor} />
		</div>
	);
}
