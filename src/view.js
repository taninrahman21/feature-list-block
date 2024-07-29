import { createRoot } from 'react-dom/client';

import './editor.scss';
import Style from './Components/Common/Style';
import FeatureListFront from './Components/Frontend/FeatureListFront';

document.addEventListener('DOMContentLoaded', () => {
	const featureListEls = document.querySelectorAll('.wp-block-b-blocks-feature-list');
	featureListEls.forEach(featureListEl => {
		const attributes = JSON.parse(featureListEl.dataset.attributes);

		createRoot(featureListEl).render(<>
			<Style attributes={attributes} id={featureListEl.id} />

			<FeatureListFront attributes={attributes} />
		</>);

		featureListEl?.removeAttribute('data-attributes');
	});
});