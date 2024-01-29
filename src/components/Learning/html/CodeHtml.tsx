import * as jest from 'jest-lite';

import { html } from "@codemirror/lang-html";
import { Code } from "../Code"
import { JestLite } from '@/types';

const { it, describe, expect, run } = jest as JestLite

export const CodeHtml = () => {
  const initialValue = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <h4>The Search for Extraterrestrial Life</h4>
    <h2>Scientists are finding that the universe abounds with the chemistry of life</h2>

    <p>In the past few decades the human species has begun, seriously and systematically, to look for evidence of life elsewhere.</p>
  </body>
</html>
`;

  return (
    <Code
      initialValue={initialValue}
      extensions={[html()]}
      tests={testCode}
    />
  )
}

const testCode = async (code: string) => {
  describe('renders properly', () => {
    it('is wrapped in correct semantic tag article', () => {
      expect(code).toMatch("<article>");
    });

    it('has h1 as highest tag', () => {
      expect(code).toMatch("<h1>");
    });

    it('has h2 or h3 as second highest tag', () => {
      expect(code).toMatch("<h2>");
    });
  });
  return await run();
}
