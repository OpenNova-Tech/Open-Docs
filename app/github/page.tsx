import { Code, GitFork, Heart, Users, Lightbulb, CheckCircle, AlertCircle } from 'lucide-react';

const ContributingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-6 py-36">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-full mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-indigo-600 mb-4">
            Contributing Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We believe in the power of open source. Every contribution, no matter how small, helps make this project better for everyone.
          </p>
        </div>

        {/* Why Open Source Matters */}
        <div className="bg-neutral-900 rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-indigo-600" />
            Why Open Source Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-blue-100" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100 mb-1">Innovation Through Collaboration</h3>
                  <p className="text-gray-400 text-sm">Different perspectives bring unique solutions. Your ideas can spark breakthroughs we haven&apos;t imagined.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-100" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100 mb-1">Quality & Reliability</h3>
                  <p className="text-gray-400 text-sm">More eyes on the code means fewer bugs and better quality. Community testing ensures robustness.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-100" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100 mb-1">Community Growth</h3>
                  <p className="text-gray-400 text-sm">A thriving community accelerates development and creates a sustainable future for the project.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-orange-800 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-orange-100" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100 mb-1">Learning & Growth</h3>
                  <p className="text-gray-400 text-sm">Contributing to open source is one of the best ways to improve your skills and build your portfolio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Contribute */}
        <div className="bg-neutral-900 rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 flex items-center gap-3">
            <GitFork className="w-8 h-8 text-indigo-600" />
            How to Contribute
          </h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Fork & Clone</h3>
                <div className="bg-neutral-800 rounded-lg p-4 font-mono text-sm text-gray-200 mb-3">
                  <div className="mb-2"># Fork the repository on GitHub, then:</div>
                  <div className="text-indigo-200">git clone https://github.com/YOUR_USERNAME/REPO_NAME.git</div>
                  <div className="text-indigo-200 mt-1">cd REPO_NAME</div>
                </div>
                <p className="text-gray-300">Start by forking the repository to your GitHub account and cloning it locally.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Create a Branch</h3>
                <div className="bg-neutral-800 rounded-lg p-4 font-mono text-sm text-gray-800 mb-3">
                  <div className="text-indigo-200">git checkout -b feature/your-feature-name</div>
                </div>
                <p className="text-gray-300">Create a descriptive branch name for your changes. Use prefixes like feature/, fix/, or docs/.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Make Your Changes</h3>
                <ul className="space-y-2 text-gray-300 mb-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Write clear, commented code following our style guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Test your changes thoroughly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Update documentation if needed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Commit & Push</h3>
                <div className="bg-neutral-800 rounded-lg p-4 font-mono text-sm text-gray-800 mb-3">
                  <div className="text-indigo-200">git add .</div>
                  <div className="text-indigo-200 mt-1">git commit -m &quot;feat: add new feature description&quot;</div>
                  <div className="text-indigo-200 mt-1">git push origin feature/your-feature-name</div>
                </div>
                <p className="text-gray-300">Write meaningful commit messages that explain what and why, not just what.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Open a Pull Request</h3>
                <p className="text-gray-300 mb-3">Go to GitHub and open a pull request with a clear description of your changes, why they&apos;re needed, and any relevant issue numbers.</p>
                <div className="bg-indigo-950 border-4 border-indigo-800 rounded-lg p-4">
                  <p className="text-indigo-50 text-sm font-medium">💡 Tip: Reference issues in your PR description using #issue-number to automatically link them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ways to Contribute */}
        <div className="bg-neutral-800 rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">Ways to Contribute</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-xl p-6">
              <Code className="w-8 h-8 text-blue-200 mb-4" />
              <h3 className="font-semibold text-white mb-2">Code</h3>
              <p className="text-white text-sm">Fix bugs, add features, improve performance, or refactor code.</p>
            </div>
            <div className="bg-gradient-to-br from-green-900 to-green-600 rounded-xl p-6">
              <AlertCircle className="w-8 h-8 text-green-200 mb-4" />
              <h3 className="font-semibold text-white mb-2">Documentation</h3>
              <p className="text-white text-sm">Improve docs, write tutorials, or create examples.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900 to-purple-600 rounded-xl p-6">
              <Lightbulb className="w-8 h-8 text-purple-200 mb-4" />
              <h3 className="font-semibold text-white mb-2">Ideas</h3>
              <p className="text-white text-sm">Suggest features, report bugs, or participate in discussions.</p>
            </div>
          </div>
        </div>

        {/* Code of Conduct */}
        <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Code of Conduct</h2>
          <p className="text-blue-100 mb-6">
            We are committed to providing a welcoming and inclusive environment. Be respectful, considerate, and collaborative. Harassment and discrimination will not be tolerated.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-neutral-950 bg-opacity-20 rounded-lg px-4 py-2 text-sm">
              ✨ Be respectful
            </div>
            <div className="bg-neutral-950 bg-opacity-20 rounded-lg px-4 py-2 text-sm">
              🤝 Collaborate openly
            </div>
            <div className="bg-neutral-950 bg-opacity-20 rounded-lg px-4 py-2 text-sm">
              💬 Communicate clearly
            </div>
            <div className="bg-neutral-950 bg-opacity-20 rounded-lg px-4 py-2 text-sm">
              🎯 Stay focused
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-300 mb-4">Ready to Make an Impact?</h3>
          <p className="text-gray-500 mb-8">Your contribution can make a difference. Let&apos;s build something amazing together!</p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              View Open Issues
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Join Discussions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributingPage;