/* eslint-disable no-console */
import gulp from 'gulp';
import loadMessages from '../src/common/intl/loadMessages';
import { diff } from './support/messages';

gulp.task('messages-check', ['messages-extract'], () => {
  const messages = loadMessages({ includeDefault: true });
  const defaultMessagesKeys = Object.keys(messages._default); // eslint-disable-line no-underscore-dangle

  const log = (what, messagesKeys) => {
    if (!messagesKeys.length) return;
    console.log(`  ${what}`);
    messagesKeys.forEach(messageKey => console.log(`    ${messageKey}`));
  };

  Object.keys(messages)
    .filter(locale => locale !== '_default')
    .forEach(locale => {
      const localeMessagesKeys = Object.keys(messages[locale]);
      const missingMessagesKeys = diff(defaultMessagesKeys, localeMessagesKeys);
      const unusedMessagesKeys = diff(localeMessagesKeys, defaultMessagesKeys);
      if (!missingMessagesKeys.length && !unusedMessagesKeys.length) return;
      console.log(locale); // eslint-disable-line no-console
      log('missing messages', missingMessagesKeys);
      log('unused messages', unusedMessagesKeys);
    });
});
