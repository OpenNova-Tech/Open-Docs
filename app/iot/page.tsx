"use client"

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function LanguagePage() {
	const systems = [
		{
			title: "Arduino",
			description: "",
			link: "iot/arduino",
			iconSrc: "icons/iot/arduino.svg"
		},
		{
			title: "Raspberry Pi",
			description: "",
			link: "iot/raspberry",
			iconSrc: "icons/iot/raspberry.svg"
		},
	]

	return (
		<div className="max-w-5xl mt-20 mx-auto px-8 py-12">
			IOT Boards and Systems
			<HoverEffect items={systems} />
		</div>
	);
}
