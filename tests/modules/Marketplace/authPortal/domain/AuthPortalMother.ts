import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';

import { AuthPortal } from '@/modules/Marketplace/authPortal/domain/AuthPortal';

const AuthPortalFactory = Factory.define<AuthPortal>(() => ({
    name: faker.company.name(),
    email: faker.internet.exampleEmail(),
}));

export const OpportunityPropertiesBuyMother = {
    create: (params?: AuthPortal): AuthPortal => {
        return AuthPortalFactory.build(params);
    },
    // createList: (length = 5): AcquisitionLead[] => {
    // 	return AcquisitionLeadFactory.buildList(length);
    // },
    // createWithTooShortTitle: (): AcquisitionLead => {
    // 	return AcquisitionLeadFactory.build({
    // 		title: faker.lorem.word(TITLE_MIN_LENGTH - 1),
    // 	});
    // },
    // createWithTooLongTitle: (): AcquisitionLead => {
    // 	return AcquisitionLeadFactory.build({
    // 		title: faker.lorem.sentence(TITLE_MAX_LENGTH + 1),
    // 	});
    // },
    // createWithInvalidImageUrl: (): AcquisitionLead => {
    // 	return AcquisitionLeadFactory.build({
    // 		imageUrl: faker.lorem.word(),
    // 	});
    // },
};
