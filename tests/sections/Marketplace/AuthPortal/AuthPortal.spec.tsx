import { test, expect } from '@playwright/test';

test('renders a heading in AuthPortal', async ({ page }) => {
  await page.goto('/auth-portal'); // Asegurar que la URL es la correcta

  const heading = await page.getByRole('heading', { level: 1 });

  await expect(heading).toBeVisible();
});