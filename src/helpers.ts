import useBreakpointHook from 'use-breakpoint';

type Breakpoints = {
    mobile: 0,
    tablet: 720,
    desktop: 1280
}

const BREAKPOINTS: Breakpoints = {mobile: 0, tablet: 720, desktop: 1280};

export const useBreakpoint = () => useBreakpointHook(BREAKPOINTS);
