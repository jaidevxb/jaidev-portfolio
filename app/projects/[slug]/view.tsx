"use client";

import { useEffect, useRef } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
	const hasSent = useRef(false);

	useEffect(() => {
		// Prevent double counting in development due to React Strict Mode
		if (hasSent.current) return;
		hasSent.current = true;

		fetch("/api/incr", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ slug }),
		});
	}, [slug]);

	return null;
};