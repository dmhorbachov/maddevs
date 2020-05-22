import {
  mount
} from '@vue/test-utils';
import frontendModal from '@/components/ui/frontend-modal';

describe('Frontend modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(frontendModal, {
      stubs: ['ValidationProvider', 'ValidationObserver', 'modal']
    });
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('sets the correct default data', () => {
    expect(typeof frontendModal.data).toBe('function');
    const defaultData = frontendModal.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.firstCheckboxId).toEqual('privacy-policy-frontend');
    expect(defaultData.secondCheckboxId).toEqual('marketing-communications-frontend');
  });

  test('has a functions', () => {
    expect(
      typeof frontendModal.methods.getPrivacyCheckboxState && 
      typeof frontendModal.methods.getDiscountOffersCheckboxState
    ).toBe('function');
  });

  test('call functions with params and change variables state', () => {
    wrapper.vm.getPrivacyCheckboxState(true);
    wrapper.vm.getDiscountOffersCheckboxState(true);

    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
      wrapper.vm.$data.agreeToGetMadDevsDiscountOffers
    ).toEqual(true);
  });
});
