import 'nprogress/nprogress.css';

import nprogress from 'nprogress';

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });

type Progress = {
  start: () => void;
  done: () => void;
};

export const progress: Progress = {
  start: nprogress.start,
  done: nprogress.done,
};
