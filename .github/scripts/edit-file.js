// .github/scripts/edit-file.js
const { Octokit } = require("@octokit/rest");

async function run() {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  
  // Extract repository details from GitHub Actions environment variables
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
  const path = "README.md"; // Target file path to update

  try {
    // 1. Retrieve current file details (content + SHA blob)
    const { data: fileData } = await octokit.rest.repos.getContent({
      owner,
      repo,
      path,
    });

    // Decode existing content from Base64
    const currentContent = Buffer.from(fileData.content, "base64").toString("utf-8");

    // 2. Modify the file content
    const updatedContent = `${currentContent}\n\n* Last updated automatically on commit: ${new Date().toISOString()} *`;

    // 3. Commit the updated file back to the repository
    await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: "chore: auto-update file after commit [skip ci]", // [skip ci] prevents infinite build loops
      content: Buffer.from(updatedContent).toString("base64"),
      sha: fileData.sha, // Required to update an existing file
    });

    console.log(`Successfully updated ${path}`);
  } catch (error) {
    console.error("Error updating file:", error);
    process.exit(1);
  }
}

run();
