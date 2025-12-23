'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Oops! A global error occurred.</h2>
          <p>Something went catastrophically wrong. We apologize for the inconvenience.</p>
          <button onClick={() => reset()}>Try again</button>
          <a href="/">Go to Homepage</a>
        </div>
      </body>
    </html>
  );
}
