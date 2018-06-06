import React from 'react';
import { Router, Route, createMemoryHistory } from 'react-router';
import { shallow, mount, render } from 'enzyme';
import ConfirmNavigation from '../ConfirmNavigation';
import Index from '../../demo/src/components/Index';
import Confirm from '../../demo/src/components/Confirm';
import Page from '../../demo/src/components/Page';
import PageTwo from '../../demo/src/components/PageTwo';

const router = mount(
  <Router history={createMemoryHistory()}>
    <Route path='/' component={Index}>
      <Route path='/page' component={Page} />
      <Route path='/page-two' component={PageTwo} />
    </Route>
  </Router>
);
const getCurrentPath = () => router.node.router.getCurrentLocation().pathname;
const goTo = (paths) => {
  if (typeof paths === 'string') {
    router.node.router.push(paths);
  } else {
    paths.forEach((path) => {
      router.node.router.push(path);
    });
  }
};

jest.dontMock('../ConfirmNavigation');

describe('test suite', function () {
  it('should wrap component in a hidden span by default', function () {
    goTo('/page');
    let wrapper = router.find(ConfirmNavigation).find('span');
    expect(wrapper.find(Confirm).length).toBe(1);
    expect(wrapper.props().style).toEqual({
      display: 'none'
    });
  });

  it('should block navigation from /page to /page-two', function () {
    goTo(['/', '/page', '/page-two']);
    expect(getCurrentPath()).toEqual('/page');
  });

  it('should allow navigation from /page to /page-two after confirming', function () {
    goTo(['/', '/page', '/page-two']);
    router.find(Confirm).props().confirmNavigation();
    expect(getCurrentPath()).toEqual('/page-two');
  });

  it('should cancel navigation from /page to /page-two after cancelling', function () {
    goTo(['/', '/page', '/page-two']);
    router.find(Confirm).props().cancelNavigation();
    let wrapper = router.find(ConfirmNavigation).find('span');
    expect(getCurrentPath()).toEqual('/page');
    expect(wrapper.find(Confirm).length).toBe(1);
    expect(wrapper.props().style).toEqual({
      display: 'none'
    });
  });

  it('should allow navigation from /page to /', function () {
    goTo(['/', '/page', '/']);
    expect(getCurrentPath()).toEqual('/');
  });
});
