import { useState } from 'react';

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
	BUG: {
		title: 'Problema',
		image: {
			source: bugImageUrl,
			alt: '',
		},
	},
	IDEA: {
		title: 'Ideia',
		image: {
			source: ideaImageUrl,
			alt: '',
		},
	},
	OTHER: {
		title: 'Outro',
		image: {
			source: thoughtImageUrl,
			alt: '',
		},
	},
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = useState(false);

	function handleRestartFeedback() {
        setFeedbackSent(false);
		setFeedbackType(null);
	}

	return (
		<div className="bg-surfacePrimary-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			{feedbackSent ? (
				<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
			) : (
				<>
					{!feedbackType ? (
						<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
					) : (
						<FeedbackContentStep
							feedbackType={feedbackType}
							onFeedbackRestartRequested={handleRestartFeedback}
							onFeedbackSent={() => setFeedbackSent(true)}
						/>
					)}
				</>
			)}

			<footer className="text-xs text-neutral-400">
				Feito com ♥ pelo{' '}
				<a
					className="underline underline-offset-2"
					href="https://romulosemiao.github.io/portfolio_romulosemiao/"
				>
					Rômulo Semião
				</a>
			</footer>
		</div>
	);
}
