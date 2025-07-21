import dynamic from 'next/dynamic';

import camelcaseKeys from 'camelcase-keys';

import Preloader from '../preloader';
import MissingSection from './missing-section';

export default function LandingPageSection({ type, sectionData }: any) {
	const sectionsComponentPaths = (): any => ({
		hero: dynamic(
			() => import('../landing-page-sections/hero')
				.catch(() => () => MissingSection) as any, {
			loading: Preloader,
		}),
		two_column_with_image: dynamic(
			() => import('../landing-page-sections/two-column-with-image')
				.catch(() => () => MissingSection) as any, {
			loading: Preloader,
		}),
		features: dynamic(
			() => import('../landing-page-sections/features')
				.catch(() => () => MissingSection) as any, {
			loading: Preloader,
		}),
		plans: dynamic(
			() => import('../landing-page-sections/plans')
				.catch(() => () => MissingSection) as any, {
			loading: Preloader,
		}),
		testimonials: dynamic(
			() => import('../landing-page-sections/testimonials')
				.catch(() => () => MissingSection) as any, {
			loading: Preloader,
		})
	});
	const SectionComponent = sectionsComponentPaths()[type] || MissingSection;

	return <SectionComponent type={type} {...camelcaseKeys(sectionData)} />
}