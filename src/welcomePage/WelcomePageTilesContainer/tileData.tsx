import bag from "@assets/images/bag-icon.svg";
import community from "@assets/images/community-icon.svg";
import discord from "@assets/images/discord-icon.svg";
import extension from "@assets/images/extension-icon.svg";
import github from "@assets/images/github-logo.svg";
import externalLink from "@assets/images/rounded-external-link-icon.svg";
import star from "@assets/images/star-icon.svg";
import { Button, HelpIcon, Paragraph, sprinkles } from "@saleor/macaw-ui-next";
import React from "react";
import SVG from "react-inlinesvg";
import { FormattedMessage, IntlShape } from "react-intl";

import {
  APPS_DOCS_URL,
  CHECKOUT_DOCS_URL,
  DASHBOARD_DOCS_URL,
  SALEOR_DISCORD_URL,
  SALEOR_GITHUB_URL,
  TECHNICAL_HELP_CTA_URL,
} from "./links";
import { WelcomePageInfoTileProps } from "./WelcomePageInfoTile";

const noShrink = sprinkles({ flexShrink: "0" });

// Headings
const CommunityIcon = () => <SVG src={community} className={noShrink} />;
const StarIcon = () => <SVG src={star} className={noShrink} />;
const ExtensionIcon = () => <SVG src={extension} className={noShrink} />;
const BagIcon = () => <SVG src={bag} className={noShrink} />;

// Bottom actions
const GitHubIcon = () => <SVG src={github} className={noShrink} />;
const DiscordIcon = () => <SVG src={discord} className={noShrink} />;
const ExternalLinkIcon = () => <SVG src={externalLink} className={noShrink} />;

export const getTilesData = ({}: {
  intl: IntlShape;
  onTileButtonClick: (tileId: string) => void;
}) => [];
