import React from 'react';
import ProfileStatus from "./ProfileStatus";
import { create } from 'react-test-renderer';


describe("ProfileStatus component", () => {
    test("status from props should be in local state", () => {
        const component = create(<ProfileStatus status='some status' />);
        const instans = component.getInstance();
        expect(instans.state.status).toBe('some status');
    });
    test("<span> should be displayed", () => {
        const component = create(<ProfileStatus status='some status' />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });
    test("<input> should be hide", () => {
        const component = create(<ProfileStatus status='some status' />);
        const root = component.root;

        expect(() => {
            const input = root.findByType('input');
        } ).toThrow();
    });
    test("<input> is work", () => {
        const component = create(<ProfileStatus status='some status' />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('some status');

    });
    test("callback is called one time", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='some status' updateUserStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.closeEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);

    })
});